class LessonsController < ApplicationController
	def index
		@student = User.all

		# rank of 10 students with the higher score
		@rank = User.order('score DESC').limit(10)

		# sample exercice for beginners
		@exercice1= Lesson.where(level: 1).sample
		@exercice2= Lesson.where(level: 1).sample
		@exercice3= Lesson.where(level: 1).sample
		until (@exercice1.exercice != @exercice2.exercice && @exercice1.exercice != @exercice3.exercice && @exercice2.exercice != @exercice3.exercice)
			@exercice1= Lesson.where(level: 1).sample
			@exercice2= Lesson.where(level: 1).sample
			@exercice3= Lesson.where(level: 1).sample
		end
		
		# sample exercice for intermediates
		@intermexercice1 = Lesson.where(level: 2).sample
		@intermexercice2 = Lesson.where(level: 2).sample
		@intermexercice3 = Lesson.where(level: 2).sample
		until (@intermexercice1.exercice != @intermexercice2.exercice && @intermexercice1.exercice != @intermexercice3.exercice && @intermexercice2.exercice != @intermexercice3.exercice)
			@intermexercice1= Lesson.where(level: 2).sample
			@intermexercice2= Lesson.where(level: 2).sample
			@intermexercice3= Lesson.where(level: 2).sample
		end
		

		#sample exerce for experts
		@exptexercice1 = Lesson.where(level: 3).sample
		@exptexercice2 = Lesson.where(level: 3).sample
		@exptexercice3 = Lesson.where(level: 3).sample
		until (@exptexercice1.exercice != @exptexercice2.exercice && @exptexercice1.exercice != @exptexercice3.exercice && @exptexercice2.exercice != @exptexercice3.exercice)
			@exptexercice1= Lesson.where(level: 3).sample
			@exptexercice2= Lesson.where(level: 3).sample
			@exptexercice3= Lesson.where(level: 3).sample
		end

	end
	
	def create

	end



end
