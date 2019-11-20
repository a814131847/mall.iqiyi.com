define(['jquery', 'md5'], function($, md5) {
    return {
        regEv: function(selector) {
            // console.log($.md5($('#password').val()));
            $(selector).on('click', function() {
                $.ajax({
                    url: 'http://127.0.0.1:8080/iqiyi.com/lib/reg.php',
                    type: 'post',
                    data: {
                        phone: $('#phone').val(),
                        password: $.md5($('#password').val())
                    },
                    success: function(res) {
                        alert(JSON.parse(res).msg);
                        localtion.reload()
                    }
                })
            });
        },
        reg: function() {
            let ophone = /^1[3-9]\d{9}$/;
            // let uname = /\w{6,16}$/;
            let opass = /^[A-z]\w{7,15}$/
                // let num = /^1[3-9]\d{9}$/;
                //验证手机号码
            $('#phone').on('keyup', function() {
                if (ophone.test($('#phone').val())) {
                    $('.p1').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.p1').html('手机格式不正确').addClass('red').removeClass('green')
                }
                if ((ophone.test($('#phone').val())) && (opass.test($('#password').val()))) {
                    $('.btn-reg').removeClass('btn-gray')
                } else {
                    $('.btn-reg').addClass('btn-gray')
                }
            });
            //验证密码
            $('#password').on('keyup', function() {
                if (opass.test($('#password').val())) {
                    $('.p2').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.p2').html('密码格式不正确').addClass('red').removeClass('green')
                }
                if ((ophone.test($('#phone').val())) && (opass.test($('#password').val()))) {
                    $('.btn-reg').removeClass('btn-gray')
                } else {
                    $('.btn-reg').addClass('btn-gray')
                }
            });

        },
        login: function() {
            let ophone = /^1[3-9]\d{9}$/;
            let opass = /^[A-z]\w{7,15}$/;
            $('#log-phone').on('keyup', function() {
                if (ophone.test($('#log-phone').val())) {
                    $('.log-p1').html('格式正确').addClass('green').removeClass('red')
                } else {
                    $('.log-p1').html('手机格式不正确').addClass('red').removeClass('green')
                }
                if ((ophone.test($('#log-phone').val())) && ($('#log-password').val())) {
                    $('.btn-login').removeClass('btn-gray')
                } else {
                    $('.btn-login').addClass('btn-gray')
                }
            });
            $('#log-password').on('keyup', function() {
                if (opass.test($('#log-password').val())) {
                    $('.log-p2').html('通过验证').addClass('green').removeClass('red')
                } else {
                    $('.log-p2').html('密码格式不正确').addClass('red').removeClass('green')
                }
                if ((ophone.test($('#log-phone').val())) && ($('#log-password').val())) {
                    $('.btn-login').removeClass('btn-gray')
                } else {
                    $('.btn-login').addClass('btn-gray')
                }

            });
        },

        loginEv: function(selector) {
            $(selector).on('click', function() {
                $.ajax({
                    url: 'http://127.0.0.1:8080/iqiyi.com/lib/login.php',
                    type: 'post',
                    data: {
                        phone: $('#log-phone').val(),
                        password: $.md5($('#log-password').val())
                    },
                    success: function(res) {
                        alert(JSON.parse(res).msg);
                        if ((JSON.parse(res).msg) == "登录成功") {
                            location.reload();
                            // $('.login').html($('#log-phone').val())
                            // localStorage.setItem('customname', $('.login').value());
                        } else if ((JSON.parse(res).msg) == "密码错误") {
                            // alert(3);
                            $('#log-password').val('');
                            $('.log-p2').html('');
                        } else {
                            $('.log-p1').html('');
                            $('.log-p2').html('');
                            $('#log-password').val('');
                            $('#log-phone').val('');
                            $('.btn-login').addClass('btn-gray');
                            $('.reg-part').addClass('show').siblings().removeClass('show');
                        }
                    }
                })
            });
        }

    }
})