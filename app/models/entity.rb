class Entity < ApplicationRecord
    validates_presence_of :name, :description
    validates :name, uniqueness: true
end
