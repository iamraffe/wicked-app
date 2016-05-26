class Graph < ApplicationRecord
  # Interventions
  # has_many :patient_events
  # has_many :interventions, through: :patient_events do
  #   def <<(new_item)
  #     super( Array(new_item) - proxy_association.owner.interventions )
  #   end
  # end
  # validates :interventions, presence: true, :if => :active_or_interventions?
  # accepts_nested_attributes_for :interventions

  # Entries
  has_many :patient_entries
  has_many :entries, through: :patient_entries do
    # def build(hash)
    #   byebug
    #   create(:symbol => type)
    # end

    def <<(new_item)
      super( Array(new_item) - proxy_association.owner.entries )
    end
  end
  validates :entries, presence: true,  :if => :active_or_entries?
  accepts_nested_attributes_for :entries

  # Patient
  belongs_to :user, optional: true
  validates :user, presence: true, :if => :active_or_patient?
  # accepts_nested_attributes_for :user

  # Type
  validates :type, presence: true

  def active?
    status == 'active'
  end

  def active_or_patient?
    status.include?('patient') || active?
  end

  def active_or_entries?
    status.include?('entries') || active?
  end

  def active_or_interventions?
    status.include?('interventions') || active?
  end

  # def make_new_entry
  #   byebug
  #   entries.create(:symbol => type)
  #   # ad.type => "Admin"
  # end
end
