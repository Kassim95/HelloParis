class UsersController < ApplicationController
	def index 
		# @exercice= Lesson.find(rand(0...Lesson.length))
		@exercice= Lesson.all
	end 
	def create
		@lesson = Lesson.new
	end

	private
	def user_params
		params.require(:le).permit(:fname, :lname, :email, :password, :score)
	end
end
