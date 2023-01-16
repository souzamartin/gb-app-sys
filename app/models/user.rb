class User < ApplicationRecord
    validates_presence_of :firstname, :lastname, :email, :password
    validates :email, uniqueness: true, email: true

    has_secure_password

    has_many :jobs, dependent: :destroy

    def full_name
        self.firstname + " " + self.lastname
    end
end
