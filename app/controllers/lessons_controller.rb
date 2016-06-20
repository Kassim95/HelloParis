class LessonsController < ApplicationController
	def index
		@student = User.all
		@rank = User.order('score DESC').limit(10)
		@exercice1= Lesson.where(level: 1).sample
		@exercice2= Lesson.where(level: 1).sample
		@exercice3= Lesson.where(level: 1).sample
		if @exercice1.exercice==@exercice2.exercice|| @exercice1.exercice==@exercice3.exercice || @exercice2.exercice==@exercice3.exercice
			@exercice1= Lesson.where(level: 1).sample
			@exercice2= Lesson.where(level: 1).sample
			@exercice3= Lesson.where(level: 1).sample
		end

		@intermexericice1 = Lesson.where(level: 2).sample
		@intermexericice2 = Lesson.where(level: 2).sample
		@intermexericice3 = Lesson.where(level: 2).sample
		if @intermexericice1.exercice == @intermexericice2.exercice || @intermexericice1.exercice == @intermexericice3.exercice || @intermexericice2.exercice == @intermexericice3.exercice
			@intermexericice1= Lesson.where(level: 2).sample
			@intermexericice2 = Lesson.where(level: 2).sample
			@intermexericice3= Lesson.where(level: 2).sample
		end
	end
	
	def create

	end



end
