class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        new_user = User.create!(user_params)
        session[:user_id] = new_user.id
        render json: new_user, status: :created
    end

    def show
        render json: User.find(session[:user_id]), status: :ok
    end

    def update
        user = User.find(session[:user_id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    def destroy
        User.find(session[:user_id]).destroy
        head :no_content
    end

    private
    def user_params
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