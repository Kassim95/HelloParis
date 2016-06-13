class LessonsController < ApplicationController
	def index
		@exercices= Lesson.all
		@user = User.new
	end
	
	def create
		@user= User.new(user_params)
		if @user.save
			render json: @new_user
		else
			render json: @new_user.errors, status: :unprocessable_entity
		end		
	end
	private 
	def user_params
		params.require(:user).permit(:fname, :lname, :email, :password, :score)
	end

end
