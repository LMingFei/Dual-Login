Activity::Application.routes.draw do

  get 'is_dimensional_login/:code'=>'user#is_dimensional_login'
  get 'is_demensional_logout/:name'=>'user#is_dimensional_logout'
  get 'request_data/:name'=>'user#dimensional_data_post'
  #post  'login'=>'user#login'
  #post  'login/:code'=>'user#login'
  get 'index' => 'user#index'
  get 'index/:code'=>'user#index'
  get "manager_logined" => "manager#manager_logined"
  get "manager_logined?id=:id" => "manager#manager_logined"

  get "forgot1" =>'forgot#forgot1'
  post "forgot1" =>'forgot#forgot1_post'

  get "forgot2" =>'forgot#forgot2'
  post "forgot2" => 'forgot#forgot2_post'

  get "forgot3" =>'forgot#forgot3'
  post "forgot3" => 'forgot#forgot3_post'
  post 'index/:code' =>'user#login'
  post 'index' =>'user#login'

  get "logout" => "user#logout"

  get 'user_logined' =>'user#user_logined'
  post 'user_logined' =>'user#user_logined'

  get 'register' => 'user#register'
  post 'register' => 'user#create'

  #post 'login' => 'user#login'
  root 'user#index'

  get 'add_user' => 'manager#add_user'

  post 'add_user' =>'manager#create_user'

  get "edit_user" =>"manager#edit_user"

  post "edit_user"=>"manager#update_user"

  get 'forgot/error_page'

  post 'user/phone_login'

  post 'user/data_synchronous'

  get 'sign_up_list'=>'user#sign_up_list'

  get 'bids_list'=>'user#bids_list'

  get 'bidding_list'=>'user#bidding_list'

  get 'synchronous_show'=>'user#synchronous_show'
  post 'synchronous_show'=>'user#synchronous_show'

end
