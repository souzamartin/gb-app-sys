Rails.application.routes.draw do
  resources :users, only: [:create]
 
  post '/login', to: 'sessions#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'
end
