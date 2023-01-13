class JobsController < ApplicationController
    def index
        render json: Job.all, status: :ok
    end

    def customer_index
        render json: User.find(session[:user_id]).jobs, status: :ok
    end

    def create
        render json: User.find(session[:user_id]).jobs.create!(job_params), status: :created
    end

    private
    def job_params
        params.permit(:location, :notes)
    end
end
