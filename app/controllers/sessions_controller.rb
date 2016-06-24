class SessionsController < ApplicationController
  def index
  end

  def create
  
 		user = User.find_by(email: params[:email]) 
	    # binding.pry
	  	if user && user.authenticate(params[:password])
	  		session[:user_id] = user.id
	      # binding.pry
	      redirect_to root_path
	  	else 
	  		redirect_to root_path
	  	end  
	end 

  def destroy
  	session.clear
  	redirect_to root_path
  end
end
