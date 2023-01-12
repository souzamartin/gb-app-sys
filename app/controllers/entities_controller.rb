class EntitiesController < ApplicationController
    skip_before_action :authorize, only: [:index]
    
    def index
        render json: Entity.all, status: :ok
    end

    def create

    end
end
