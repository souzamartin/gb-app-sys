class JobEntitiesController < ApplicationController
    def create
        params[:_json].map do |entity|
            assoc_entity = Entity.find(entity[:id])
            assoc_entity.job_entities.create(job_id: Job.last.id)
        end
    end
end