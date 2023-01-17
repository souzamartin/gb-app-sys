class Entity < ApplicationRecord
    validates_presence_of :name, :description
    validates :name, uniqueness: true

    has_one_attached :image

    has_many :job_entities, dependent: :destroy
    has_many :jobs, through: :job_entities
end
