class UsersController < ApplicationController
	def index 
		# @exercice= Lesson.find(rand(0...Lesson.length))
		@exercice= Lesson.all
	end 
	
	def create
		@user= User.new(user_params)
		if @user.save
			redirect_to root_path
		else
			redirect_to root_path
		end		
	end

	def update
		@user= User.find(session[:user_id])
		@score = @user.score
		@user.update(score: @score + 10)
	end

	private 
	def user_params
		params.require(:user).permit(:fname, :lname, :email, :password, :score)
	end
end
