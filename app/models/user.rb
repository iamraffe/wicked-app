class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :graphs
  has_many :entries
  has_many :interventions

  scope :full_name, lambda { |query|
    query.downcase!
   (query ? where(["LOWER(first_name) ILIKE ? OR LOWER(last_name) ILIKE ? OR CONCAT(LOWER(first_name), ' ', LOWER(last_name)) ILIKE ?", '%'+ query + '%', '%'+ query + '%','%'+ query + '%' ])  : {})
  }

  def full_name
    "#{first_name} #{last_name}"
  end

  has_many :caregivers
  has_many :care_teams, through: :caregivers, dependent: :destroy

end
