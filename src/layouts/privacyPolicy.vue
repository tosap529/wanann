
<script>
    export default {
        
    }
</script>

<template>
    <div>

  <div class="privacyPlolicy_container">
    <div class="title"><h1>隱私權政策</h1></div>
    <h2>一、收集的資訊</h2>
    <p>當您使用我們的網站時，我們可能會收集您提供的個人資訊，包括但不限於您的姓名、電子郵件地址、聯絡資訊和支付資訊等。</p>

    <h2>二、使用的方式</h2>
    <h4> 我們收集的個人資訊將用於以下用途：</h4>
    <ol>
      <li>▸ 提供我們的產品和服務。</li>
      <li>▸ 處理您的訂單和付款。</li>
      <li>▸ 回應您的查詢和提供客戶支援。</li>
      <li>▸ 提供個人化的使用體驗。</li>
      <li>▸ 發送與您相關的通訊，包括營銷通訊和服務公告。</li>
      <li>▸ 改善我們的產品和服務。</li>
      <li>▸ 遵守法律和法規。</li>
    </ol>

    <h2>三、資訊的分享</h2>
    <h4>我們不會出售、交易或轉讓您的個人資訊給第三方。我們僅會在以下情況下分享您的個人資訊：</h4>
    <ol>
      <li>▸ 與我們的合作夥伴、承包商和服務提供商，以協助我們提供產品和服務。</li>
      <li>▸ 遵守法律和法規的要求或保護我們或他人的權利、財產或安全。</li>
    </ol>

    <h2>四、保安措施</h2>
    <p>我們將採取合理的措施來保護您的個人資訊免於未經授權的訪問、使用、更改或洩露。然而，請注意，互聯網上傳輸的資訊並非百分之百安全，我們無法保證或保護您的個人資訊的安全。</p>

    <h2>五、Cookie 技術</h2>
    <p>我們的網站可能使用 cookie 技術來收集和儲存您的個人資訊。您可以選擇接受或拒絕 cookie，但如果您拒絕使用 cookie，可能無法完全使用我們的網站的所有功能。</p>

    <h2>六、關於第三方網站的連結 </h2>
    <p>我們的網站可能包含指向第三方網站的連結，這些網站運營獨立於我們之外，並有其自己的隱私權政策。我們對任何第三方網站的隱私權做法不負責。</p>

    <h2>七、對未成年人的保護</h2>
    <p>我們不會有意收集 18 歲以下未成年人的個人資訊。如果您是未成年人，請在家長或監護人的指導下使用我們的網站。</p>

    <h2>八、隱私權政策的變更</h2>
    <p>我們保留隨時更新或修改本隱私權政策的權利。我們會在本網站上發佈更新的隱私權政策，以通知您任何變更。</p>

    <h2>九、聯絡我們</h2>
    <h4>如果您對本隱私權政策有任何疑問或意見，請通過以下聯絡方式與我們聯絡：</h4>
    <ul>
      <li>▸ 浣安/電話 : 02-12345678</li>
      <li>▸ Email: wa@rmail.com</li>
      <li>▸ 地址：台北市中山區南京東路三段219號4樓、5樓。</li>
    </ul>
    <br>
    <p>感謝您閱讀我們的隱私權政策。請注意，您使用我們的網站將視為您同意本隱私權政策的條款。</p>
    <router-link :to="{ name: 'home' }"><h4 class="backhome">回首頁</h4></router-link>
  </div>

    </div>
</template>

<style lang="scss">
@import '@/sass/main.scss';

.privacyPlolicy_container{
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  h1{
    margin-top: 20px;
  }
  h4{
    margin-top: 12px;
    margin-bottom: 12px;
  }
  h2{
    margin-top: 20px;
    margin-bottom: 10px;
    color: $brown;
  }
  p{
  line-height: 1.6;
  }
  li{
    font-size: $p;
    line-height: 1.6;

  }
  .backhome{
    margin-top: 16px;
    color: $brown;
    &:hover{
      color: $dark-milktea;
    }
  }
}

</style>