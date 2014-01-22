/**
 * Created with JetBrains RubyMine.
 * User: fei
 * Date: 13-10-19
 * Time: 下午4:58
 * To change this template use File | Settings | File Templates.
 */
function ActivityListController($scope,$navigate,$http){
    $scope.goto_create_activity=function(){
        navigate_to_create_activity($navigate);
    }

    $scope.current_activity_array=Activity.get_current_activity_array();

    $scope.goto_detail_activity=function(activity){
        Activity.set_current_activity(activity);
        navigate_to_activity_sign_up($navigate)
    }

    $scope.btn_disable_flag=!validate_is_sign();


    $scope.logout = function(){
        data_synchronous_dimensional_logout($http);
        User.logout();
        navigate_to_logout($navigate);
    }


    function data_synchronous_dimensional_logout($http){
        var name=User.get_current_user_name();
        var activities=Activity.get_current_activity_array();
        var sign_ups=Signup.get_sign_ups_of_current_user();
        var bids=Bid.get_Bids_of_current_user();
        var biddings=Bidding.get_Biddings_of_current_user();
        var code='logout';
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
