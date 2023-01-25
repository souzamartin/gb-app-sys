class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        render json: Review.all, status: :ok
    end

    def create
        new_review = Review.create!(review_params)
        render json: new_review, status: :created
    end

    def destroy
        Review.find(params[:id]).destroy
        head :no_content
    end

    private
    def review_params
        params.permit(:user_id, :rating, :content)
    end
end