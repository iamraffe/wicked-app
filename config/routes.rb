Rails.application.routes.draw do
  root 'pages#index'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :graphs do
    resources :build, controller: 'graphs/build'
  end

  resources :users

  post '/graphs/new/build', to: 'graphs/build#create', as: 'graph_new_build'

  post "/graphs/export/", to: "graphs#export"
end
