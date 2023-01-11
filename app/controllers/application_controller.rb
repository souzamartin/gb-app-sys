class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize

    private
    def authorize
        return render plain: "Unauthorized", status: :unauthorized unless session.include? :user_id
    end
end
