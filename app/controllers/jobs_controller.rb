class JobsController < ApplicationController
    def index
        render json: Job.all, status: :ok
    end

    def customer_index
        render json: User.find(session[:user_id]).jobs, status: :ok
    end

    def create
        new_job = Job.create!(
            user_id: session[:user_id],
            location: params[:formData][:location],
            notes: params[:formData][:notes]
        )

        params[:associatedEntities].each do |entity|
            JobEntity.create(job_id: new_job.id, entity_id: entity[:id])
        end
    end

    def destroy
        Job.find(params[:id]).destroy
        head :no_content
    end
end
