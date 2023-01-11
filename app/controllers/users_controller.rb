class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        render json: User.create!(new_user_params), status: :created
    end

    def show
        render json: User.find(session[:user_id]), status: :ok
    end

    def destroy
        User.find(session[:user_id]).destroy
        head :no_content
    end

    private
    def new_user_params
        params.permit(
            :email,
            :firstname,
            :lastname,
            :password,
            :password_confirmation,
            :phone,
            :address
        )
    end
end