class User < ApplicationRecord
    validates_presence_of :firstname, :lastname, :email, :password
    validates :email, uniqueness: true

    has_secure_password
end
