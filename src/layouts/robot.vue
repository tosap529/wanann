<script setup>
import { ref } from 'vue';

// 定義一個開關變數 useGPT，用來控制是否使用 GPT 服務回覆使用者
// 1 為啟用 GPT 服務，0 為使用預設回覆
const useGPT = ref(1);


// 宣告 userInput 用來綁定並監聽使用者在輸入框內的輸入內容
const userInput = ref('');
// 初始化對話，一開始包含機器人歡迎語
const info = ref([
    {
        text: '您好！有什麼想詢問的嗎？',
        time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }),
        type: 'auto'  // 指示此訊息為自動機器人發出
    }
]);

// 預設的機器人回覆
function chatback(userInput) {
    if (userInput.includes('時間')) {
        return '客服時間為週一至週五的9:00-12:00和13:00-17:30';
    } else if (userInput.includes('服務地點')) {
        return '浣安服務地區包含台北/新北/桃園，詳細可參考「我們的服務」中的介紹';
    } else if (userInput.includes('價錢')||userInput.includes('價格')) {
        return '浣安的服務有不同方案，按照方案和加購項目有不同的計價，詳細可參考「我們的服務」中的介紹';
    } else {
        return '不好意思，小助手無法理解您輸入的內容，請來電洽詢客服人員02-12345678';
    }
}

// 使用 GPT 進行回覆的非同步函式
async function getChatGPTResponse(userMessage) {
    const openaiApiKey = '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';
    // 向 OpenAI API 發送請求得到回覆
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-0613",   // 指定使用的 GPT 模型
            messages: [
                {"role": "system", "content": "你是最安心的居家清潔服務「浣安」的顧客服務機器人「浣安小助手」，你不是ChatGPT，請你以對待客戶的尊重語氣回答我的問題，請用繁體中文回答，每一次回答我請不超過50字。居家清潔服務「浣安」的營業資訊如下：「浣安是提供最安心的居家清潔服務，旨在為顧客營造一個乾淨、整潔的生活環境。我們的客服團隊透過電話02-12345678、Line@@wanann，以及E-mail wa@rmall.com，於週一至週五的9:00-12:00和13:00-17:30隨時待命，以解答您的疑問並提供協助，線上預約系統24小時皆可預約好方便。浣安秉持著輕鬆愜意，家的幸福保姆的企業理念，專注於提升居家清潔的品質，減輕您生活中的負擔，使您能專注於更有價值的事物。我們了解在快節奏的現代生活中，繁忙的工作日程使得居家清潔變成一項挑戰，尤其是對於那些家中有需要特別照顧的長輩的家庭而言。因此，我們的服務不僅僅是清潔，更是一份對家庭的關懷和支持，使用安全環保的清潔用品，保障您和家人的健康。浣安的團隊成員都經過專業訓練並持有良民證，我們重視您的隱私和安全，致力於提供有保障的清潔服務。我們的目標是讓每一位顧客都能享受到安心、安全、安住的服務體驗。浣安不僅提升了居家環境的品質，同時也為社區創造價值，包括提供就業機會和促進員工的個人成長，我們致力於成為一個對社會有正面影響的企業。透過我們的專業服務，我們希望能使您的家成為一個更加美好、舒適的居住空間。」。我們目前提供三種清潔方案，每個方案所需清潔時間約為一個時段(約4小時)，方案有：「浣安全室清潔 NTD4,000:基本清潔(地板清潔與消毒、家具表面清潔、玻璃窗清潔、開放式空間除塵)、廚房簡易清潔(擦拭廚具表面、清潔爐灶與抽油煙機、消毒廚房台面、清理廚房地板)、浴室簡易清潔(清潔馬桶&浴缸&淋浴區、擦拭梳妝區表面、更換毛巾與浴巾、消毒浴室地板)、臥室及客房清潔(更換床單與枕套、擦拭家具表面、地板吸塵、整理書桌與衣櫥)」、「廚房徹底清潔 NTD2,000:廚房專業清潔、加強油汙處理、廚具汰洗、水槽疏通」、「浴室特攻清潔 NTD1,500:浴室專業清潔、加強水垢處理、專業除黴、馬桶清潔」，另外還有追加服務如窗飾清潔(清理窗簾、百葉窗， 整理簾布，布幔清洗)、布件除蟎(為窗簾布、沙發布、床單等布件去除塵蟎)、冷氣機清理(濾網清理、散熱鋁鰭片清理)、冰箱清理(擦拭表面、密封條，除霜，整理食物)、洗衣機清理(洗衣槽、導水管、洗衣粉盒清理)、陽台清潔(清理灰塵與污垢、照明設施、陽台水槽)、簡易消毒(以環保消毒劑簡易消毒家中環境)，每項都是加NTD500，還有人工估價項目如空屋(若屋況為空屋，則可減免價格)、毛孩服務(適用於家中有飼養狗、貓等寵物的用戶)、大坪數(室內坪數超過25坪)、樓中樓、局部加強(適用於房屋有特殊格局：深窄的空間、地下室等)。提供居家清潔服務的地區包含:台北市(中正區、大同區、中山區、松山區、大安區、萬華區、信義區、士林區、北投區、內湖區、南港區、文山區)、新北市部分區域(三峽區、三重區、中和區、五股區、板橋區、新店區、永和區、汐止區、新莊區、淡水區、深坑區、蘆洲區、林口區、泰山區、土城區)、桃園市部分地區(桃園市桃園區、桃園市八德區、桃園市龜山區)，商城商品購買則是全台灣都可以寄送。服務預約須知:如有選購「特殊處理」之加購服務品項，浣安服務人員將在訂單成立後24小時內與您聯繫，敬請留意！「特殊處理」品項採人工估價，現場收費。系統僅提供可服務日期、時段供您訂購時選擇，實際服務時間可能因人力調配異動，我們將於訂購完成後另由浣安服務人員與您聯絡確認。若浣安服務人員無法與您取得聯絡，將會在次個工作日再次聯絡，請您於訂單付款成功後留意來電。如您持續無法與服務人員完成約時，請您聯絡通知客服。訂單相關須知:僅接受信用卡支付。在您預約我們的服務時，您需要提供有效的信用卡信息以完成付款。我們接受主要的信用卡品牌，包括Visa、Mastercard、American Express等。請注意，我們不接受現金、支票或其他支付方式。如果您需要取消預約，請在預定時間的最少 24 小時前通知我們。未能提前通知取消的預約將收取全額費用。我們承諾保留客戶的反饋，這將有助於我們持續改進我們的服務質量。您的評論將被尊重並用於提高我們的服務水平。服務相關須知:我們致力於提供高質量的清潔服務。如果您對我們的服務不滿意，請立即與我們聯絡。浣安團隊將竭盡所能解決您的問題，以確保您對我們的服務滿意。我們為您提供了一個常見問題解答區域，這裡包含了關於浣安清潔服務的常見問題和相應答案。您可以在官方網站上找到這些資訊，亦可透過信箱、電話、官網向我們聯繫。"},
                {"role": "user", "content": userMessage + " 。請用繁體中文回答並在50字內"},
            ]
        })
    }
    );
    const data = await response.json(); // 解析 JSON 回覆
    // console.log(data); 
    return data.choices[0].message.content;  // 返回 GPT 回覆內容
}
// 處理發送邏輯的異步方法
// 發送訊息的函數，根據 useGPT 的值判斷使用哪種回覆方式
async function sendMessage() {
    if (userInput.value.trim()) {  // 確保輸入不是空白
        // 取得當前的時間格式化為24 小時制的時間格式，只顯示小時分鐘
        const currentTime = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' });
        const userMessageContent = userInput.value;
        userInput.value = '';  // 立刻清空輸入框

        // 將使用者的訊息加入對話資訊中
        const userMessage = {
            text: userMessageContent,
            time: currentTime,
            type: 'cust' // 標示為使用者的訊息
        };
        // 將輸入的訊息增加到對話資訊info，因為info是響應式的，所以info.value發生變化時，Vue會自動檢測到這一變化並更新DOM
        info.value.push(userMessage);

        if (useGPT.value === 1) {
            // 啟用 GPT 服務，得到 GPT 的回覆並加入對話中
            const robotReply = await getChatGPTResponse(userMessageContent); // 取得GPT完整回覆
            // 將完整回覆加到對話中
            const robotMessage = {
                text: robotReply,
                time: currentTime,
                type: 'auto'
            };
            info.value.push(robotMessage);
        } else {
             // 使用預設的回覆方式
            const robotReply = chatback(userMessageContent); 
            // 直接將回覆加到對話中
            const robotMessage = {
                text: robotReply,
                time: currentTime,
                type: 'auto'
            };
            info.value.push(robotMessage);
        }
    }
}


// 切換機器人顯示狀態的函數
function toggleRobot() {
    document.querySelector('.robot').classList.toggle('tap');
}

function botclose(){
    document.querySelector('.robot').classList.remove('tap');
}

</script>

<template>
    <div>
        <div class="robot">  
            <div class="bot" @click="toggleRobot">
                <img class="robot_logo" src="@/img/robot.svg" alt="robot">
            </div>

            <div class="talk">
                <img class="cross_modal" @click="botclose" src="../img/white_x.svg" alt="">

                <div class="robot_layout_top">
                    <img src="@/img/logo_title.svg" alt="logo">
                    <p>浣安小助手</p>
                </div>

                <div class="info">
                    <!-- 使用 v-for 迴圈顯示對話資訊 -->
                    <div v-for="(message, index) in info" :key="index" :class="message.type">
                        <!-- 使用者訊息時間顯示在左側 -->
                        <template v-if="message.type === 'cust'">
                            <span class="chattime">{{ message.time }}</span>
                            <p>{{ message.text }}</p>
                        </template>

                        <!-- 機器人回覆時間顯示在右側 -->
                        <template v-else>
                            <p>{{ message.text }}</p>
                            <span class="chattime">{{ message.time }}</span>
                        </template>
                    </div>
                </div>
                <input type="text" v-model="userInput" @keydown.enter="sendMessage" placeholder="請輸入您的問題...">
                <font-awesome-icon icon="paper-plane" @click="sendMessage" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>
