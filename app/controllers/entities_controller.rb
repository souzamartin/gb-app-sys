class EntitiesController < ApplicationController
    def index
        render json: Entity.all, status: :ok
    end

    def create

    end
end
