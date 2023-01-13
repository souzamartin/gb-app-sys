class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable

    before_action :authorize

    private
    def authorize
        return render json: {error: "Unauthorized"}, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found(exception)
        render json: {errors: {exception.model => "Not found"}}, status: :not_found
    end

    def render_unprocessable(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
