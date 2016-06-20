class LessonsController < ApplicationController
	def index
		@student = User.all
		@rank = User.order('score DESC').limit(10)
		@exercice1= Lesson.find(rand(Lesson.count)+1)
		@exercice2= Lesson.find(rand(Lesson.count)+1)
		@exercice3= Lesson.find(rand(Lesson.count)+1)
		if @exercice1.exercice==@exercice2.exercice|| @exercice1.exercice==@exercice3.exercice || @exercice2.exercice==@exercice3.exercice
			@exercice1= Lesson.find(rand(Lesson.count)+1)
			@exercice2= Lesson.find(rand(Lesson.count)+1)
			@exercice3= Lesson.find(rand(Lesson.count)+1)
		end
	end
	
	def create

	end



end
