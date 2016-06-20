class ExpertController < ApplicationController
  def index
  	@userupdate= User.find(session[:user_id])
  	@score = @userupdate.score
    @userupdate.update(score: @score + 30)
    redirect_to lessons_path
  end
end
