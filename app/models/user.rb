class User < ActiveRecord::Base
	has_many :user_lessons
	has_secure_password
	validates_confirmation_of :password
	validates_presence_of :password, on: :create
end
