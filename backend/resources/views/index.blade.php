@extends('layouts.app')
    @section('content')
     
                <!-- Begin Page Content -->
                <div class="container-fluid">

                    <!-- Content Row -->
                    <div class="row">

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Current Token Price
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                  	  @foreach($stages as $stage)
                                                        @if($stage->active) 
                                                        	${{ $stage->rate }}
                                                        @endif
                                                      @endforeach
                                                  	</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Users (total)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format(count($users) - 1) }}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Wallets (Total)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{{ number_format(count($wallets)) }}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Token Supply
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">200B (10T)</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-warning" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Current Stage
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                  		@foreach($stages as $stage)
                                                      @if($stage->active) 
                                                      {{ $stage->stage }}
                                                      @endif
                                                      @endforeach
                                                  	</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Current Stage Supply
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                  		@foreach($stages as $stage)
                                                      @if($stage->active) 
                                                      {{ $stage->presale_tokens_supply }}B
                                                      @endif
                                                      @endforeach
                                                  	</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-primary" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Bonus Price on referral
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                  		2%
                                                  	</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Fair Launch Price
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                                  		0.0000015 (1.5M MCap)
                                                  	</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-success" role="progressbar"
                                                            style="width: 100%" aria-valuenow="50" aria-valuemin="0"
                                                            aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div class="text-center">
                             @if(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @elseif(session('success'))
                            <div class="mb-4 font-medium text-sm text-success">
                                Message: {{ session('success') }}
                            </div>
                            @endif
                        </div>
						<div class="row col-md-12 mr-0 ml-0">
                        
                          @foreach($stages as $stage)
                          <div class="col-md-4 pr-3 mb-3">
                           	<form action="edit-stage-post" method="post">
                              @csrf
                               <input name="id" required id="id" type="hidden" value="{{ $stage->id }}" class="form-control form-control-user" placeholder="Enter Stage ID">

                              <div class="row justify-content-space-between card mb-2 border-left-{{ $stage->active == 1 ? 'warning' : 'primary' }}" style="padding-left: 10px; border: none">
                              <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Stage Title</label>
                                <div>
                                	<input name="stage" required id="stage" type="text" value="{{ $stage->stage }}" class="form-control form-control-user" placeholder="Enter Stage Title">
                            	</div>
                              </div>
                               <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Rate($)</label>
                                <div>
                                	<input name="rate" required id="rate" type="text" value="{{ $stage->rate }}" class="form-control form-control-user" placeholder="Enter Rate">
                            	</div>
                              </div>
                              <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Discount(%)</label>
                                <div>
                                	<input name="discount" required id="discount" type="text" value="{{ $stage->discount }}" class="form-control form-control-user" placeholder="Enter Stage Discount">
                            	</div>
                              </div>
                              <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Tokens Percentage(%) For This Stage</label>
                                <div>
                                	<input name="percentage" required id="percentage" type="text" value="{{ $stage->presale_tokens_prcntg }}" class="form-control form-control-user" placeholder="Enter Tokens Supply Percentage">
                            	</div>
                              </div>
                              <div class="mb-2">
                                <label style="padding: 5px; margin-bottom: 0px;">Tokens Supply(Billions) For This Stage</label>
                                <div>
                                	<input name="supply" required id="supply" type="text" value="{{ $stage->presale_tokens_supply }}" class="form-control form-control-user" placeholder="Enter Tokens Supply">
                            	</div>
                              </div>
                                
                              </div>
                              <button style="float: right; margin-left: 10px" class="btn btn-primary" type="submit">
                                  Save
                              </button>
                              @if(!$stage->active)
                               <input type="submit" name="stage_active" value="Active Stage" class="btn btn-warning" style="float: right"/>
                              @endif
                            </form>
                          </div>
						@endforeach
                    </div>

            
                </div>
                <!-- /.container-fluid -->
    @endsection