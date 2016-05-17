<?php
class JSSDK
{
    private $appId;
    private $appSecret;

    public function __construct($appId, $appSecret)
    {
        $this->appId = $appId;
        $this->appSecret = $appSecret;
    }

    public function getSignPackage()
    {
        $jsapiTicket = $this->getJsApiTicket();

        // 注意 URL 一定要动态获取，不能 hardcode.
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
        $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $timestamp = time();
        $nonceStr = $this->createNonceStr();

        // 这里参数的顺序要按照 key 值 ASCII 码升序排序
        $string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

        $signature = sha1($string);

        $signPackage = array(
            "appId" => $this->appId,
            "nonceStr" => $nonceStr,
            "timestamp" => $timestamp,
            "url" => $url,
            "signature" => $signature,
            "rawString" => $string,
        );
        return $signPackage;
    }

    private function createNonceStr($length = 16)
    {
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $str = "";
        for ($i = 0; $i < $length; $i++) {
            $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
        }
        return $str;
    }

    private function getJsApiTicket()
    {
        $accessToken = $this->getAccessToken();
        if (!$accessToken) {
            $jsapi_ticket = false;
        }
        $db = new PDO("mysql:host=127.0.0.1;dbname=alumni2016", "wechat", "wechat@)!#");
        $db->query("SET NAMES 'UTF8'");
        $db->query("SET CHARACTER SET UTF8");
        $db->query("SET CHARACTER_SET_RESULTS=UTF8");
        $db->setattribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $db->setattribute(PDO::ATTR_EMULATE_PREPARES, false);
        $result = $db->query("select * from wechat_ticket");
        $array = $result->fetchAll();

        if (empty($array[0]['jsapi_ticket']) || empty($array[0]['time']) || (time() - intval($array[0]['time']) > 7000)) {
            $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=" . $accessToken . "&type=jsapi";
            $json = file_get_contents($url);
            $time = time();
            $jsapi_ticket = json_decode($json)->ticket;
            $db->beginTransaction();
            try {
                $exec_update = $db->exec("update wechat_ticket set jsapi_ticket = '$jsapi_ticket',time = '$time' where appid = '$this->appId'");
                $db->commit();
            } catch (Exception $e) {
                $db->rollBack();
                return false;
            }
        } else {
            $jsapi_ticket = $array[0]['jsapi_ticket'];
        }
        return $jsapi_ticket;
    }

    private function getAccessToken()
    {
        $db = new PDO("mysql:host=218.192.166.167;dbname=scutyth", "wechat", "wechat@)!#");
        $db->query("SET NAMES 'UTF8'");
        $db->query("SET CHARACTER SET UTF8");
        $db->query("SET CHARACTER_SET_RESULTS=UTF8");
        $db->setattribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
        $db->setattribute(PDO::ATTR_EMULATE_PREPARES, false);
        $result = $db->query("select * from wechat_token");
        $array = $result->fetchAll();
        if (time() - intval($array[0]['time']) > 7000) {
            $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" . $this->appId . "&secret=" . $this->appSecret;
            $json = file_get_contents($url);
            $access_token = json_decode($json)->access_token;
            $time = time();
            $db->beginTransaction();
            try {
                $exec_update = $db->exec("update wechat_token set access_token = '$access_token',time = '$time' where appID = '$this->appId'");
                $db->commit();
            } catch (Exception $e) {
                $db->rollBack();
                return false;
            }
        } else {
            $access_token = $array[0]['access_token'];
        }
        return $access_token;
    }

    private function httpGet($url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 500);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_URL, $url);

        $res = curl_exec($curl);
        curl_close($curl);

        return $res;
    }
}
