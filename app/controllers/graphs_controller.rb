class GraphsController < ApplicationController
  def index
    @graphs = Graph.all.where(status: 'active')
  end

  def show
    @graph = Graph.find(params[:id])
    respond_to do |format|
      format.html
      format.json { render json: {entries: @graph.entries.limit(5).order(date: :DESC).reverse} }
    end
  end
end
