class LessonsController < ApplicationController
	def index
		@student = User.all

		# rank of 10 students with the higher score
		@rank = User.order('score DESC').limit(10)

		# sample exercice for beginners
		@exercice1= Lesson.where(level: 1).sample
		@exercice2= Lesson.where(level: 1).sample
		@exercice3= Lesson.where(level: 1).sample
		
		
		# sample exercice for intermediates
		@intermexercice1 = Lesson.where(level: 2).sample
		@intermexercice2 = Lesson.where(level: 2).sample
		@intermexercice3 = Lesson.where(level: 2).sample

		#sample exerce for experts
		@exptexercice1 = Lesson.where(level: 3).sample
		@exptexercice2 = Lesson.where(level: 3).sample
		@exptexercice3 = Lesson.where(level: 3).sample
	end
	
	def create

	end



end
