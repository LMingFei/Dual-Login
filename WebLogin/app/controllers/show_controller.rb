class ShowController < ApplicationController
  require 'json'
  require 'rest-client'
  def show
    data =JSON.parse(RestClient.get('http://192.168.1.159:3001/request_data/'+params[:name]))
    @uname=params[:name]
    @activities=data["activities"]

  end

  def get_lists  datas
    list_array=[]
    datas.group_by{|data| data['activity_id']}.each do |key,value|
      list_array.push({:activity_id=>key,:num=>value.length})
    end
    return list_array
  end
end