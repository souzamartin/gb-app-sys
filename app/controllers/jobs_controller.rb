class JobsController < ApplicationController
    def index
        render json: Job.all, status: :ok
    end

    def customer_index
        user = User.find(session[:user_id])
        render json: user.jobs, status: :ok
    end
end
