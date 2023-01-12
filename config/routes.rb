Rails.application.routes.draw do
  resources :jobs
  resources :entities, only: [:index, :create]
  resources :users, only: [:create, :update, :destroy]
 
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
