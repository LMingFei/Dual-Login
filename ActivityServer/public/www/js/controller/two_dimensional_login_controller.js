/**
 * Created by mingfei on 14-1-20.
 */
function TwoDimensionalLoginController($scope,$navigate,$http,$routeParams)
{
    init_activity_database();
    $scope.VerificationOfEmpty=function (){
        $scope.btn_flag=!($scope.password==undefined||$scope.password==""||$scope.name==undefined||$scope.name=="");
    }

    $scope.goto_activity_list=function(){
        var name=$scope.name
        var password=$scope.password
        $http.post('/user/phone_login',{name:name,password:password})
            .success(function(response)
            {
                if(JSON.parse(response)==true){
                    User.set_current_user_name(name);
                    data_synchronous_dimensional_login($http);
                    navigate_to_activity_list($navigate);
                }
                else
                {
                    alert("无效的用户名或密码");
                }
            }).error(function(){
                alert("服务器出现错误")
            })
    }

     function data_synchronous_dimensional_login($http){
        var name=User.get_current_user_name();
        var activities=Activity.get_current_activity_array();
        var sign_ups=Signup.get_sign_ups_of_current_user();
        var bids=Bid.get_Bids_of_current_user();
        var biddings=Bidding.get_Biddings_of_current_user();
        var code=$routeParams.code;
        $http.post("/user/data_synchronous",{name:name,activities:activities,sign_ups:sign_ups,bids:bids,biddings:biddings,code:code})
            .success(function(response){
                if(JSON.parse(response)==true){

                }
                else
                {
                    alert("同步数据有误");
                }
            }).error(function(error){
                alert("同步数据失败,请联系管理员!")
            });
    }
}