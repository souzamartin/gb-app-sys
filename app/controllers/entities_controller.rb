class EntitiesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        render json: Entity.all, status: :ok
    end

    def create
        new_entity = Entity.create!(entity_params)
        render json: new_entity, status: :created
    end

    private
    def entity_params
        params.permit(:name, :classification, :description, :notes, :image)
    end
end
