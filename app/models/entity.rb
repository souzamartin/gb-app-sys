class Entity < ApplicationRecord
    has_many :job_entities, dependent: :destroy
    has_many :jobs, through: :job_entities
    
    has_one_attached :image, dependent: :destroy

    validates_presence_of :name, :description
    validates :name, uniqueness: true
    validates :image,
        attached: true,
        content_type: ['image/png', 'image/jpg', 'image/jpeg'],
        size: {less_than: 10.megabytes, message: 'is too large'}
end