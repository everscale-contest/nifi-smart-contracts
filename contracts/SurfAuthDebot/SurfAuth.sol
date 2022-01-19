pragma ton-solidity >=0.47.0;
pragma AbiHeader expire;
pragma AbiHeader time;
pragma AbiHeader pubkey;
// import required DeBot interfaces and basic DeBot contract.
import "https://raw.githubusercontent.com/tonlabs/debots/main/Debot.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/UserInfo/UserInfo.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/Terminal/Terminal.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/ConfirmInput/ConfirmInput.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/Base64/Base64.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/Network/Network.sol";
import "https://raw.githubusercontent.com/tonlabs/DeBot-IS-consortium/main/Sdk/Sdk.sol";
import "Upgradable.sol";
import "../libraries/SwiftAddress.sol";

abstract contract AMSig {
    function sendTransaction(
        address dest,
        uint128 value,
        bool bounce,
        uint8 flag,
        TvmCell payload)
    public {}
    function submitTransaction(
        address dest,
        uint128 value,
        bool bounce,
        bool allBalance,
        TvmCell payload)
    public returns (uint64 transId) {}
}



contract SurfAuthDebot is Debot, Upgradable {

    event BOT_INI_nifi_bot1_1(uint256 hash, address user);

    uint128 constant AUTH_FEE = 0.05 ton;
    string constant POST_URL = "https://some.some/post";

    uint256 m_hash;
    uint256 m_pk;
    uint32 m_sign;
    TvmCell m_sendMsg;
    address m_sender;
    address m_dst;
    uint128 m_amount;
    TvmCell m_payload;
    string m_otp;


    function onAuth(uint256 hash) public internalMsg {
        emit BOT_INI_nifi_bot1_1{dest: SwiftAddress.value()}(hash, msg.sender);
    }

    function getAuthMsg(uint256 hash) public pure returns(TvmCell message) {
        TvmCell body = tvm.encodeBody(SurfAuthDebot.auth, hash);
        TvmBuilder message_;
        message_.store(false, true, true, false, address(0), address(this));
        message_.storeTons(0);
        message_.storeUnsigned(0, 1);
        message_.storeTons(0);
        message_.storeTons(0);
        message_.store(uint64(0));
        message_.store(uint32(0));
        message_.storeUnsigned(0, 1); //init: nothing$0
        message_.storeUnsigned(1, 1); //body: right$1
        message_.store(body);
        message = message_.toCell();
    }

    function getPostAuthMsg(string otp) public pure returns(TvmCell message) {
        TvmCell body = tvm.encodeBody(SurfAuthDebot.authPost, otp);
        TvmBuilder message_;
        message_.store(false, true, true, false, address(0), address(this));
        message_.storeTons(0);
        message_.storeUnsigned(0, 1);
        message_.storeTons(0);
        message_.storeTons(0);
        message_.store(uint64(0));
        message_.store(uint32(0));
        message_.storeUnsigned(0, 1); //init: nothing$0
        message_.storeUnsigned(1, 1); //body: right$1
        message_.store(body);
        message = message_.toCell();
    }

    function start() public override {
        Terminal.print(0,"Invoke me!");
    }

    function authPost(string otp) public {
        m_otp = otp;
        UserInfo.getSigningBox(tvm.functionId(getPostUserSign));
    }

    function getPostUserSign(uint32 handle) public {
        m_sign = handle;
        UserInfo.getAccount(tvm.functionId(getPostUserAddress));
    }

    function getPostUserAddress (address value) public {
        m_dst = value;
        UserInfo.getPublicKey(tvm.functionId(getPostPubkey));
    }
    function getPostPubkey (uint256 value) public {
        m_pk = value;
        ConfirmInput.get(tvm.functionId(signMessage), "You are suggested to sign auth data. Would you like to continue?");
    }

    function signMessage(bool value) public {
        if (value) {
            string str;
            str=format("{}{}",m_otp,m_dst);
            uint256 hash = sha256(str);
            Sdk.signHash(tvm.functionId(setSignature), m_sign, hash);
        } else {
            Terminal.print(0,"Terminated!");
        }
    }

    function setSignature(bytes signature) public {
         Base64.encode(tvm.functionId(setEncode), signature);
    }

    function setEncode(string  base64) public {
        string[] headers;
        headers.push("Content-Type: application/x-www-form-urlencoded");
        string body = "&signature=" + base64 + "&pk=" + format("{:064x}",  m_pk );
        body.append(format("&otp={}",m_otp));
        body.append(format("&addr={}",m_dst));
        Terminal.print(0,"[DEBUG] body");
        Terminal.print(0,body);
        Network.post(tvm.functionId(setResponse), POST_URL, headers, body);
    }

   function setResponse(int32 statusCode, string[] retHeaders, string content) public {
        retHeaders;
        content;
        if (statusCode == 200) {
            Terminal.print(0,'Congratulations, authentication passed.');
        } else {
            Terminal.print(0,'Authentication FAILED.');
        }
    }


    function auth(uint256 hash) public {
        m_hash = hash;
        UserInfo.getSigningBox(tvm.functionId(getUserSign));
    }

    function getUserSign(uint32 handle) public {
        m_sign = handle;
        UserInfo.getAccount(tvm.functionId(getUserAddress));
    }

    function getUserAddress (address value) public {
        m_dst = value;
        ConfirmInput.get(tvm.functionId(firstMessage), "You are suggested to confirm a transaction. Would you like to continue?");
    }
    function firstMessage(bool value) public {
        if (value) {
            TvmCell payload = tvm.encodeBody(SurfAuthDebot.onAuth, m_hash);
            optional(uint256) none;

            m_sendMsg = tvm.buildExtMsg({
                abiVer: 2,
                dest: m_dst,
                callbackId: tvm.functionId(authSuccess),
                onErrorId: tvm.functionId(authError),
                time: 0,
                expire: 0,
                sign: true,
                pubkey: none,
                signBoxHandle: m_sign,
                call: {AMSig.submitTransaction, address(this), AUTH_FEE, true, false, payload}
            });

            confirmAuth(true);
        }
    }

    function confirmAuth(bool value) public {
        if (value) {
            tvm.sendrawmsg(m_sendMsg,1);
        } else {
            Terminal.print(0, "Terminated!");
        }
    }

    function authError(uint32 sdkError, uint32 exitCode) public {
        ConfirmInput.get(tvm.functionId(confirmAuth), format("Transaction failed. Sdk error = {}, Error code = {}\nDo you want to retry?", sdkError, exitCode));
    }

    function authSuccess(uint256 id) public {
        id;
        Terminal.print(0,"Auth request sent!");
    }

    function getPayMsg(address sender, address recipient, uint128 amount, TvmCell payload) public pure
        returns(TvmCell message) {
        TvmCell body = tvm.encodeBody(SurfAuthDebot.pay, sender, recipient, amount, payload);
        TvmBuilder message_;
        message_.store(false, true, true, false, address(0), address(this));
        message_.storeTons(0);
        message_.storeUnsigned(0, 1);
        message_.storeTons(0);
        message_.storeTons(0);
        message_.store(uint64(0));
        message_.store(uint32(0));
        message_.storeUnsigned(0, 1); //init: nothing$0
        message_.storeUnsigned(1, 1); //body: right$1
        message_.store(body);
        message = message_.toCell();
    }

    function pay(address sender, address recipient, uint128 amount, TvmCell payload) public {
        m_dst = recipient;
        m_amount = amount;
        m_payload = payload;
        m_sender = sender;
        UserInfo.getSigningBox(tvm.functionId(getPayUserSign));
    }

    function getPayUserSign(uint32 handle) public {
        m_sign = handle;
        UserInfo.getAccount(tvm.functionId(getPayUserAddress));
    }

    function getPayUserAddress (address value) public {
        if (value == m_sender){
            optional(uint256) none;
            m_sendMsg = tvm.buildExtMsg({
                abiVer: 2,
                dest: value,
                callbackId: tvm.functionId(paySuccess),
                onErrorId: tvm.functionId(payError),
                time: 0,
                expire: 0,
                sign: true,
                pubkey: none,
                signBoxHandle: m_sign,
                call: {AMSig.sendTransaction, m_dst, m_amount, true, 1, m_payload}
            });
            confirmPay(true);
        } else {
            Terminal.print(0,"Error: wrong sender address!");
        }
    }

    function confirmPay(bool value) public {
        if (value) {
            tvm.sendrawmsg(m_sendMsg,1);
        } else {
            Terminal.print(0, "Terminated!");
        }
    }

    function payError(uint32 sdkError, uint32 exitCode) public {
        ConfirmInput.get(tvm.functionId(confirmPay), format("Transaction failed. Sdk error = {}, Error code = {}\nDo you want to retry?", sdkError, exitCode));
    }

    function paySuccess() public {
        Terminal.print(0,"Payment done!");
    }


    /*
    *  Implementation of DeBot
    */
    function getDebotInfo() public functionID(0xDEB) override view returns(
        string name, string version, string publisher, string caption, string author,
        address support, string hello, string language, string dabi, bytes icon
    ) {
        name = "NiFi Club";
        version = "0.2.0";
        publisher = "";
        caption = "";
        author = "";
        support = address.makeAddrStd(0, 0x0);
        hello = "";
        language = "en";
        dabi = m_debotAbi.get();
        icon = "";
    }

    function getRequiredInterfaces() public view override returns (uint256[] interfaces) {
        return [ Terminal.ID ];
    }

    /*
    *  Implementation of Upgradable
    */
    function onCodeUpgrade() internal override {
        tvm.resetStorage();
    }

}
