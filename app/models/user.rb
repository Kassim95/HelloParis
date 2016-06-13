class User < ActiveRecord::Base
	has_many :user_lessons
	# has_secure_password
	validates_confirmation_of :password
	# validate_presence_of :password, on: :create
end
