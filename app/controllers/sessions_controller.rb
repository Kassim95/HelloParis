class SessionsController < ApplicationController
  def index
  end

  def create
  	user = User.find_by(email: params[:email]) 
  	if user && user.authenticate(params[:password])
  		session[:user_id] = user.id
  		redirect_to users_path 
  	else 
  		redirect_to :back
  	end   
  end

  def destroy
  	session.clear
  	redirect_to lessons_path
  end
end
