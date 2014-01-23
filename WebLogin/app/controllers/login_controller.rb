class LoginController < ApplicationController
  require 'rest_client'
  def index
    time=Time.now
    @Verification_Code=rand(2000).to_s+time.usec.to_s;
    @url="https://chart.googleapis.com/chart?cht=qr&chs=150x150&choe=UTF-8&chld=L|4&chl=http://192.168.1.159:3001/index/"+@Verification_Code
  end


  #def is_demensional_logout
  #  render :text => RestClient.get('http://192.168.1.159:3001/is_demensional_logout/'+params[:name])
  #end
end
