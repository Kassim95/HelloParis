class LessonsController < ApplicationController
	def index
		@exercices= Lesson.all
		@user = User.new
	end
	
	def create

	end



end
