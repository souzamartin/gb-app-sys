class User < ApplicationRecord
    has_secure_password
    
    has_many :jobs, dependent: :destroy
    
    validates_presence_of :firstname, :lastname, :email, :password
    validates :email, uniqueness: true, email: true

    def full_name
        self.firstname + " " + self.lastname
    end
end
