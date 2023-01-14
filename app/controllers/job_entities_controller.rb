class JobEntitiesController < ApplicationController
    def create
        params[:_json].map do |entity|
            assoc_entity = Entity.find_by_name(entity)
            assoc_entity.job_entities.create(job_id: Job.last.id)
        end
    end
end