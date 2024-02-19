<template>
    <div>
        <div class="bMember container-fluid">
        <div class="row">
            <!-- Sidebar -->
            <div class="col-sm-3 sidebar bMember_sidebar">
                <ul class="nav flex-column">
                    <li class="bMember_nav-item">
                        <h3>會員管理</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon1.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">會員註冊資料</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>服務及其訂單管理</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon2.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">服務訂單</a>
                        <a class="nav-link" href="#">服務評論</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>商品及其訂單管理</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon3.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">商品訂單</a>
                        <a class="nav-link" href="#">商品</a>

                    </li>
                    <li class="bMember_nav-item">
                        <h3>活動及文章管理</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon4.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">活動</a>
                        <a class="nav-link" href="#">文章</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>營運分析</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon5.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">成交量統計(月)</a>
                    </li>
                    <li class="bMember_nav-item">
                        <h3>客服</h3>
                        <!-- <div class="icon">
                            <img src="@/img/bmember/bmember_icon6.svg" alt="">
                        </div> -->
                        <a class="nav-link" href="#">聯絡表單內容</a>
                    </li>
                    <li class="bMember_nav-item">
                        <img src="@/img/bmember/bmember_icon7.svg" alt="">
                        <h3>登出</h3>
                        <!-- <button><img src="@/img/bmember/bmember_icon7.svg" alt="">登出</button> -->
                    </li>
                </ul>
            </div>
            <!-- Main Content -->
            <div class="col-sm-9 main-content bMember_main-content">
                <div class="bMember_data-table">
                    <div class="bMember_logo">
                        <img src="@/img/bmember/bMember_logo.svg" alt="">
                    </div>
                    <div class="bMember_tab_bar">
                        <div class="tab">
                            <ul>
                                <li class="tab_on"><a href="#">會員註冊資料</a></li>                                 
                            </ul>
                        </div>
                        <div class="bMember_search-container">
                            <input type="text" class="bMember_search-input" placeholder="帳號/姓名/手機號碼">
                        </div>
                    </div>
                    <table class="bMember_table table-striped">
                        <thead>
                            <tr>
                                <th>會員ID</th>
                                <th>帳號</th>
                                <th>姓名</th>
                                <th>手機號碼</th>
                                <th>電子郵件</th>
                                <th>註冊日期</th>
                                <th>權限</th>

                            </tr>
                        </thead>
                        <tbody>
                            <!-- 数据行 -->

                            <tr>
                                <td>1</td>
                                <td>Account</td>
                                <td>王小明</td>
                                <td>0988123456</td>
                                <td>wang0206@email.com</td>
                                <td>2024/2/6</td>
                                <td>開放</td>
                                <td>
                                    <button class="edit-btn">編輯與查看</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                   
                    <div class="bMember_pagination">
                        <a href="#" class="pagination-link">首頁</a>
                        <span class="pagination-separator">&lt;</span>
                        <a href="#" class="pagination-number">1</a>
                        <a href="#" class="pagination-number">2</a>
                        <a href="#" class="pagination-number">3</a>
                        <a href="#" class="pagination-number">4</a>
                        <a href="#" class="pagination-number">5</a>
                        <span class="pagination-separator">&gt;</span>
                        <a href="#" class="pagination-link">尾頁</a>
                    </div>


                    

                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '@/sass/main.scss';

</style>

