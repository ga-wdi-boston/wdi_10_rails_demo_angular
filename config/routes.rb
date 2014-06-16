AngularProducts::Application.routes.draw do
  resources :state_recividisms

  resources :products

  get "main/index"
  root "main#index"
end
