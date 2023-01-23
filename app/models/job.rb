class Job < ApplicationRecord
  belongs_to :user
  
  has_many :job_entities, dependent: :destroy
  has_many :entities, through: :job_entities
  
  validates :location, presence: true
end
