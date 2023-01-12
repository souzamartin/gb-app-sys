class JobsController < ApplicationController
    def index
        render json: Job.all, status: :ok
    end
end
